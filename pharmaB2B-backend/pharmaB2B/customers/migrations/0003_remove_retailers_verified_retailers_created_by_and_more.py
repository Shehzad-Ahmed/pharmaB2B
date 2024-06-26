# Generated by Django 4.1.3 on 2022-12-24 23:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('customers', '0002_alter_retailers_verified_on'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='retailers',
            name='verified',
        ),
        migrations.AddField(
            model_name='retailers',
            name='created_by',
            field=models.ForeignKey(default='9bcff66a-ea1b-4e0f-a812-53ec9991b4ed', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='retailers',
            name='rejection_reason',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='retailers',
            name='status',
            field=models.TextField(choices=[('not-decided', 'not-decided'), ('verified', 'verified'), ('rejected', 'rejected')], default=False),
        ),
    ]
