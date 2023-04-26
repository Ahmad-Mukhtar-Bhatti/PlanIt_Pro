
import numpy as np
from sklearn.linear_model import LinearRegression


expense = {1:500, 2:700, 3:350, 4:1200, 5:200,6:20,7:300,8:240,9:1000,10:130,11:700,12:700,13:60,14:140,15:500,16:500,17:500,18:900,19:700,20:460,21:1000}


def generate(budget, expense):
    # Calculate the total of expenses so far
    total_expense = sum(expense.values())

    # Calculate the remaining budget
    remaining_budget = budget - total_expense

    # Calculate the number of remaining days
    num_remaining_days = 30 - len(expense)

    # Prepare the data for linear regression
    X = np.array(list(expense.keys())).reshape(-1, 1)
    y = np.array(list(expense.values())).reshape(-1, 1)

    # Fit the linear regression model
    model = LinearRegression()
    model.fit(X, y)

    # Generate suggestions using the linear regression model
    suggestions = {}
    for day in range(21, 31):
        suggestion = round(model.predict([[day]])[0][0], -1)
        suggestion = max(suggestion, 0)  # Make sure the suggestion is non-negative
        suggestions[day] = suggestion

    # Calculate the total of suggestions
    total_suggestions = sum(suggestions.values())

    # If the total of suggestions is greater than the remaining budget,
    # adjust the suggestions to fit the budget
    if total_suggestions > remaining_budget:
        factor = remaining_budget / total_suggestions
        for day in suggestions:
            suggestions[day] = round(suggestions[day] * factor, -1)

    return suggestions


# Print the suggestions
budget=2000
suggestions = generate(budget, expense)
print("expenses:", expense)
print(list(expense.keys())[-1])
check = list(expense.keys())[-1]
expenseupdated = expense.copy()   
expenseupdated.update(suggestions)
print("expenses updaed", expenseupdated)
print(list(expenseupdated.keys())[-1])

print("Suggestions:", expenseupdated)
print("Total Expense of the month:", sum(expenseupdated.values()))
print("Total money saved:", budget - sum(expenseupdated.values()))

import matplotlib.pyplot as plt
# print(list(expense.keys())[-1])

x = list(expenseupdated.keys())
y = list(expenseupdated.values())

colors = ['red' if i < check else 'blue' for i in range(len(x))] # changing colors till index 3 to red and the bars after that to blue
fig, ax = plt.subplots()

ax.bar(x, y, color=colors)

plt.show()
