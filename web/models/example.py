from django.db import models
from django.utils import timezone

class _ExampleManager(models.Manager):
    def create_example(self, val):
        """
        Creates an Example object.
        """
        return self.create(value=val)

class Example(models.Model):
    """
    Represents an example.
    """
    objects = _ExampleManager()

    value = models.CharField(max_length=255, blank=True)
    eg = models.ForeignKey('SomeModel', on_delete=models.CASCADE)

    # If a word has no user, it's a site-wide word.
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField()

    def save(self, *args, **kwargs):
        # Update timestamps
        now = timezone.now()

        if not self.created:
            self.created = now

        self.modified = now

        return super(Example, self).save(*args, **kwargs)

    def __str__(self):
        return self.value
