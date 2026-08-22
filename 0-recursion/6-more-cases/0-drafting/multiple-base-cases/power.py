def power(base, exponent):
    # Base cases
    if exponent == 0:
        return 1
    if exponent == 1:
        return base
    # Recursive case
    return base * power(base, exponent - 1)