# Generated by Django 4.1.3 on 2022-12-24 23:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0005_alter_retailers_rejection_reason_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='retailers',
            name='rejection_reason',
            field=models.TextField(blank=True, default=''),
        ),
    ]
