"""
The initial setup file sets up the PharmaB2B's own registration as retailer and
creates admin user.
"""
import getpass

from django.contrib.auth import get_user_model
from django.db import transaction

from pharmaB2B import utils
from pharmaB2B.customers.models import Retailers

Users = get_user_model()


def run():
    with transaction.atomic():
        # Create PharmaB2B as retailer.
        retailer = Retailers.objects.create(
            name="PharmaB2B",
            address="PharmaB2B, Hill Street",
            postal_code="ST4 1NL",
            city="Stoke-On-Trent",
            license_number="LICENSE-123456789",
            verified=True,
            verified_on=utils.get_datetime()
        )

        password = getpass.getpass("Set the password for admin: ")
        Users.objects.create_superuser(
            first_name="PharmaB2B",
            last_name="Admin",
            email="admin@pharmab2b.co",
            retailer=retailer,
            is_active=True,
            date_joined=utils.get_datetime(),
            password=password
        )
