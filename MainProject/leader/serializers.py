from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Team,Team_Member,SubTaskAssigned,SubTaskSubmit

class Teamserializer(HyperlinkedModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"

class TeamMember_serializer(HyperlinkedModelSerializer):
    class Meta:
        model = Team_Member
        fields = "__all__"

class SubTaskAssigned_serializer(HyperlinkedModelSerializer):
    class Meta:
        model = SubTaskAssigned
        fields = "__all__"
        
class SubTaskSubmit_serializer(HyperlinkedModelSerializer):
    class Meta:
        model = SubTaskSubmit
        fields = "__all__"