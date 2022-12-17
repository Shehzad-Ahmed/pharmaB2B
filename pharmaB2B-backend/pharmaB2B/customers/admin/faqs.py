from django.contrib import admin


class FAQsAdmin(admin.ModelAdmin):

    search_fields = ("question", "answer")