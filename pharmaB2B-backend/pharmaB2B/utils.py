import secrets
import string

from django.utils import timezone


def get_datetime():
    return timezone.now()


def generate_random_password():
    letters = string.ascii_letters
    digits = string.digits
    special_chars = string.punctuation
    alphabet = letters + digits + special_chars
    pwd_length = 12
    pwd = ''
    for i in range(pwd_length):
        pwd += ''.join(secrets.choice(alphabet))
    return pwd
