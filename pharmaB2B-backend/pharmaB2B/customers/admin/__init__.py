from django.contrib import admin

from pharmaB2B.customers.admin.contact_us import ContactUsAdmin
from pharmaB2B.customers.admin.faqs import FAQsAdmin
from pharmaB2B.customers.admin.retailers import RetailersAdmin
from pharmaB2B.customers.models import Retailers, FAQs, ContactUs

admin.site.register(Retailers, RetailersAdmin)
admin.site.register(FAQs, FAQsAdmin)
admin.site.register(ContactUs, ContactUsAdmin)
