from scipy.optimize import linprog

n = 4

# 目標函數係數（最大化時使用 -c）
c = [-10**(n - j) for j in range(1, n + 1)]

# 正確的限制式：2 * ∑(10^{i-j} * x_j) + x_i ≤ 100^{i-1}
A_ub = []
b_ub = []

for i in range(1, n + 1):
    row = []
    for j in range(1, n + 1):
        if j < i:
            row.append(2 * 10**(i - j))  # ✅ 正確地乘上 2
        elif j == i:
            row.append(1)
        else:
            row.append(0)
    A_ub.append(row)
    b_ub.append(100**(i - 1))

bounds = [(0, None)] * n

result1 = linprog(c, A_ub=A_ub, b_ub=b_ub, bounds=bounds, method='highs')

print("【修正後的第一題結果】")
print("最佳解 x =", result1.x)
print("最大值 =", -result1.fun)
