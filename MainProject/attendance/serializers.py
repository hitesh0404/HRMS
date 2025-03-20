from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Attendance,AttendanceDetails,Leave

class Attendanceserializer(HyperlinkedModelSerializer):
    class Meta:
        model = Attendance
        fields = "__all__"

class AttendanceDetailserializer(HyperlinkedModelSerializer):
    class Meta:
        model = AttendanceDetails
        fields = "__all__"
        
class Leaveserializer(HyperlinkedModelSerializer):
    class Meta:
        model = Leave
        fields = "__all__"

