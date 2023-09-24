import timeit


def sum_of_squares_high_level(numbers):
    return sum(x ** 2 for x in numbers)


def sum_of_squares_low_level(numbers):
    total = 0
    for x in numbers:
        total += x**2
    return total


# Create a list of numbers for testing
numbers = list(range(100000))

# Benchmark the high-level approach
high_level_time = timeit.timeit(
    lambda: sum_of_squares_high_level(numbers), number=1000)

# Benchmark the low-level approach
low_level_time = timeit.timeit(
    lambda: sum_of_squares_low_level(numbers), number=1000)

print(f"High-Level Approach Time: {high_level_time:.5f} seconds")
print(f"Low-Level Approach Time: {low_level_time:.5f} seconds")
