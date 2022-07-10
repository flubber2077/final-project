class ContactMailer < ApplicationMailer
  default from: 'notifications@example.com'

  CONTACT_EMAIL = "kyle.dylan.jordan@gmail.com"

  def submission(message)
    @message = message
    mail(to: CONTACT_EMAIL, subject: 'New contact page submission')
  end
end
