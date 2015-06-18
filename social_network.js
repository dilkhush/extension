var TWITTER_LINK = "https://twitter.com/intent/tweet?";
var GMAIL_LINK = "mailto:?"
function SocialNetwork(){}

SocialNetwork.prototype.social_links = function(range, spans){
  this.data = range.toString();
  var twitter = this.twitter_link(this.data)
  var email   =  this.email_link(this.data)
	var $social_networks = $('.social_networks').clone();
  $social_networks.removeClass('hide').addClass('custom_show');
  $social_networks.find('.twitter').prop('href', twitter)
  $social_networks.find('.email').prop('href', email)
  $(spans[spans.length -1]).after($social_networks);
}

SocialNetwork.prototype.twitter_link = function(text){
	return TWITTER_LINK + "text="+text+"&url="+ this.current_page();
}

SocialNetwork.prototype.email_link = function(text){
	return GMAIL_LINK + "subject="+ this.current_page() +"&body="+ text + this.current_page();
}

SocialNetwork.prototype.current_page = function(){
  return location.href;
}

var template = "<div class='social_networks hide'><a class='twitter' target='_blank' href=''><img src='https://rawgit.com/dilkhush/extension/master/twitter.png' alt='HTML tutorial' style='width:35px;height:35px;border:0'></a><a class='email' target='_blank' href=''><img src='https://rawgit.com/dilkhush/extension/master/email.jpg' alt='HTML tutorial' style='width:35px;height:35px;border:0'></a></div>";

var div = document.createElement('div');
div.innerHTML = template
document.body.appendChild(div);
var hltr = new TextHighlighter(document,{
  onAfterHighlight: function (range, highlight_span) {
    new SocialNetwork().social_links(range, highlight_span);
  },
});
