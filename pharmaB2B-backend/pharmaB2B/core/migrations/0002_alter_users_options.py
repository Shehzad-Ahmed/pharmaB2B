# Generated by Django 4.1.3 on 2023-01-09 11:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='users',
            options={'verbose_name': 'User', 'verbose_name_plural': 'Users'},
        ),
    ]