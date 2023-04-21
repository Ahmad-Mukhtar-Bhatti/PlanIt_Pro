import matplotlib.pyplot as plt
import numpy as np
import random
import matplotlib.pyplot as plt

budget = 20000
expense = {1:500, 2:700, 3:350, 4:1200, 5:200,6:20,7:300,8:240,9:1000,10:130,11:700,12:700,13:60,14:140,15:500,16:500,17:500,18:900,19:700,20:460,21:1000}

def generate(budget, expense):
    total_expense = sum(expense.values())
    remaining_budget = budget - total_expense
    num_remaining_days = 30 - len(expense)
    min_value = min(expense.values())
    max_value = max(expense.values())
    suggestions = {}
    for day in range(21, 31):
        suggestion = random.randint(min_value, max_value)
        suggestion = round(suggestion, -1) # round to nearest 10
        suggestions[day] = suggestion

    total_suggestions = sum(suggestions.values())

    if total_suggestions > remaining_budget:
        factor = remaining_budget / total_suggestions
        for day in suggestions:
            suggestions[day] = round(suggestions[day] * factor, -1)

    expenseupdated = expense.copy()
    expenseupdated.update(suggestions)

    return expenseupdated

# Generate the updated expenses
expenseupdated = generate(budget, expense)

# Plot the chart
fig, ax1 = plt.subplots()

# Bar chart for expenses
x = list(expenseupdated.keys())
y1 = list(expenseupdated.values())
ax1.bar(x, y1, color='red', alpha=0.5)
ax1.set_xlabel('Day of the month')
ax1.set_ylabel('Expenses')
ax1.set_title('Monthly Expenses')

# Line chart for budget
y2 = [budget - sum(y1[:i]) for i in range(len(y1))]
ax2 = ax1.twinx()
ax2.plot(x, y2, color='blue', linestyle='dashed')
ax2.set_ylabel('Budget')

plt.show()
