# Generated by Django 4.2.4 on 2023-09-21 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("countdown", "0002_alter_word_word_length_alter_word_word_text"),
    ]

    operations = [
        migrations.AddField(
            model_name="word",
            name="category",
            field=models.CharField(max_length=50, null=True),
        ),
    ]
