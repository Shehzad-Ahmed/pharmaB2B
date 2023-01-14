from django.contrib import admin


class CategoryAdmin(admin.ModelAdmin):

    search_fields = ("name", )

    list_display = ("name", "deleted")

    list_editable = ("deleted",)

    readonly_fields = (
        "id",
        "created_on",
        "updated_on"
    )