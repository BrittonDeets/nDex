# Generated by Django 2.2.6 on 2019-10-18 18:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Index',
        ),
        migrations.RenameField(
            model_name='bank',
            old_name='created',
            new_name='added',
        ),
    ]
