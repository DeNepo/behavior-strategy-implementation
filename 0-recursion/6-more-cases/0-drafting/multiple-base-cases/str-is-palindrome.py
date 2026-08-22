def is_palindrome(s):
    # Base cases
    if len(s) <= 1:
        return True
    # Recursive case
    if s[0] != s[-1]:
        return False

    return is_palindrome(s[1:-1])
