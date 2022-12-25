from django.contrib import admin


class ContactUsAdmin(admin.ModelAdmin):

    search_fields = ("name", "email", "contact_no", "question")

    list_display = ("name", "email", "responded", "question")

    list_filter = ("responded", )

    readonly_fields = ("created_on", "updated_on")

    ordering = ("responded", "created_on")
