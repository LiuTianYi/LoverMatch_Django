from django.conf.urls import url
from lovermatch.views import hello
from lovermatch.views import login
from . import views

app_name = 'lovermatch'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^test/(?P<some_string>[\w]*)/$', views.helloworld, name='helloworld'),
    url(r'^signup_form/$', views.show_signup_form, name='show_signup_form'),
    url(r'^signup/$', views.signup, name='signup'),
    url(r'^(?P<username>[\w]+)/results/$', views.results, name='results'),
    url(r'^login/', login),
]
