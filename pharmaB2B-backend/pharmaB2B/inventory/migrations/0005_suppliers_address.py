# Generated by Django 4.1.3 on 2023-01-14 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0004_suppliers_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='suppliers',
            name='address',
            field=models.TextField(blank=True, default=''),
        ),
    ]
