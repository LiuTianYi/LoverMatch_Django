from django.conf.urls import url
from . import views

app_name = 'lovermatch'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^test/(?P<some_string>[\w]*)/$', views.helloworld, name='helloworld'),
    # url(r'^signup_form/$', views.show_signup_form, name='show_signup_form'),
    url(r'^signup_form', views.show_signup_form, name='show_signup_form'),
    url(r'^signup/$', views.signup, name='signup'),
    url(r'^activate/(?P<token>[A-Za-z0-9-_.]*)/$', views.active_user, name='active_user'),
    # url(r'^(?P<username>[\w]+)/results/$', views.results, name='results'),
    url(r'^login', views.login),
    url(r'^show', views.showInfo),
    url(r'^hello', views.helloworld),
    url(r'^showInfo', views.showInfo),
    # url(r'^signup_form', views.show_signup_form,),
]
