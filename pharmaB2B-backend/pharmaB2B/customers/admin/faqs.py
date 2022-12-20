from django.contrib import admin


class FAQsAdmin(admin.ModelAdmin):

    search_fields = ("order", "question", "answer")

    list_display = ("order", "question", "answer")

    readonly_fields = ("created_on", "updated_on")
