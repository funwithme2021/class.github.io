# file: single_machine_mip.py
import random
import gurobipy as gp
from gurobipy import GRB
import matplotlib.pyplot as plt

random.seed(42)

num_job = 10
J = list(range(num_job))

# data
p = {i: random.randint(10, 21) for i in J}           # processing time
d = {i: random.randint(35, 66) for i in J}           # due date
r = {i: random.randint(0, 21)  for i in J}           # release date
w = {i: random.randint(1, 6)   for i in J}           # tardiness weight
u = {(i, j): random.randint(1, 16) for i in J for j in J if i != j}  # seq-dep setup

# a safe Big-M (上界可用「最晚開始」近似）
M = sum(p.values()) + max(d.values()) + 100

m = gp.Model("SingleMachine")

# variables (連續會比較快)
S = m.addVars(J, lb=0.0, vtype=GRB.CONTINUOUS, name="S")   # start time
C = m.addVars(J, lb=0.0, vtype=GRB.CONTINUOUS, name="C")   # completion
T = m.addVars(J, lb=0.0, vtype=GRB.CONTINUOUS, name="T")   # tardiness

# 對每一對 i<j，建立一個二元變數 b[i,j] 表示「i 在 j 前面」
pairs = [(i, j) for i in J for j in J if i < j]
b = m.addVars(pairs, vtype=GRB.BINARY, name="b")           # precedence selector

# objective: minimize weighted tardiness
m.setObjective(gp.quicksum(w[j] * T[j] for j in J), GRB.MINIMIZE)

# linking
m.addConstrs((C[j] == S[j] + p[j] for j in J), name="link_C")
m.addConstrs((T[j] >= C[j] - d[j] for j in J), name="tardiness")
m.addConstrs((S[j] >= r[j] for j in J), name="release")

# disjunctive non-overlap for each pair (i<j)
# 若 b[i,j]=1 代表 i 在 j 前： S[j] >= S[i] + p[i] + u[i,j]
# 否則 j 在 i 前：          S[i] >= S[j] + p[j] + u[j,i]
for i, j in pairs:
    m.addConstr(S[j] >= S[i] + p[i] + u[i, j] - M * (1 - b[i, j]), name=f"i_before_j_{i}_{j}")
    m.addConstr(S[i] >= S[j] + p[j] + u[j, i] - M * b[i, j],       name=f"j_before_i_{i}_{j}")

# 可選：稍微收斂的參數
m.Params.MIPGap = 0.0
m.Params.TimeLimit = 30

m.optimize()

print("\nBest objective:", m.objVal)
for j in J:
    print(f"Job {j:2d}: S={S[j].X:.1f}, C={C[j].X:.1f}, T={T[j].X:.1f}")

# --- Gantt plot ---
schedule = sorted([(j, S[j].X, p[j]) for j in J], key=lambda x: x[1])
fig, ax = plt.subplots(figsize=(10, 2.8))
for k, (job, start, dur) in enumerate(schedule):
    ax.broken_barh([(star  t, dur)], (0.4*k, 0.35))
    ax.text(start + dur/2, 0.4*k + 0.175, f'J{job}', ha='center', va='center')
    # due date line
    ax.plot([d[job], d[job]], [0.4*k-0.05, 0.4*k+0.4], linestyle='--')

ax.set_xlabel("Time")
ax.set_yticks([0.4*k+0.175 for k in range(len(schedule))])
ax.set_yticklabels([f'Job {j}' for j,_,_ in schedule])
ax.set_title("Single Machine Schedule (seq-dep setup)")
plt.tight_layout()
plt.show()
