# Generated by Django 4.1.3 on 2023-01-14 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0003_products_generic'),
    ]

    operations = [
        migrations.AddField(
            model_name='suppliers',
            name='email',
            field=models.EmailField(blank=True, default='', max_length=254),
        ),
    ]
