from django.forms import fields


# Thanks to https://stackoverflow.com/questions/36477759/django-percentage-field
class PercentageField(fields.FloatField):
    widget = fields.TextInput(attrs={"class": "percentInput"})

    def to_python(self, value):
        val = super(PercentageField, self).to_python(value)
        if self.is_number(val):
            return val/100
        return val

    def prepare_value(self, value):
        val = super(PercentageField, self).prepare_value(value)
        if self.is_number(val) and not isinstance(val, str):
            return str((float(val)*100))
        return val

    @classmethod
    def is_number(cls, s):
        if s is None:
            return False
        try:
            float(s)
            return True
        except ValueError:
            return False
