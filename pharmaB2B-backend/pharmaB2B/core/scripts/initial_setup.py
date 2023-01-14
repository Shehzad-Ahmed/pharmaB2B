"""
The initial setup file sets up the PharmaB2B's own registration as retailer and
creates admin user.
"""
import getpass

from django.contrib.auth import get_user_model
from django.core.management import call_command
from django.db import transaction

from pharmaB2B import utils
from pharmaB2B.customers.models import Retailers

Users = get_user_model()


def run():
    call_command("loaddata", "initial_data/groups.json", verbosity=0)
    print("Created Group: Inventory Manager")
    print("Created Group: Customer Support")
    print("Created Group: Sales Manager")
    call_command("loaddata", "initial_data/pharmab2b.json", verbosity=0)
    print("Created admin: Username/Email: admin@pharmab2b.co Default Password: Pharmab2b123")
    print("Created Inventory Staff Member: Username/Email: inventory.person@pharmab2b.co Default Password: Pharmab2b123")
    print("Created Inventory Staff Member: Username/Email: customer.person@pharmab2b.co Default Password: Pharmab2b123")
    print("Created Inventory Staff Member: Username/Email: sales.person@pharmab2b.co Default Password: Pharmab2b123")
