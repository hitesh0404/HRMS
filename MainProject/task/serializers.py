from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Task_Assigned,Task_Submitted,TeamTaskAssign,TeamTaskSubmitted

class TaskAssigned_serializer(HyperlinkedModelSerializer):
    class Meta:
        model = Task_Assigned
        fields = "__all__"

class Task_Submitted_serializer(HyperlinkedModelSerializer):
    class Meta:
        model = Task_Submitted
        fields = "__all__"

class TeamTaskAssign_serializer(HyperlinkedModelSerializer):
    class Meta:
        model = TeamTaskAssign
        fields = "__all__"
        
class TeamTaskSubmitted_serializer(HyperlinkedModelSerializer):
    class Meta:
        model = TeamTaskSubmitted
        fields = "__all__"