# Generated by Django 4.1.3 on 2022-12-26 19:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='productstocks',
            options={'verbose_name': 'Product Stock', 'verbose_name_plural': 'Product Stocks'},
        ),
    ]
