class UserMailer < ApplicationMailer
    default from: ENV['GMAIL_USERNAME']

    # layout "mailer"

    def welcome_email

      mail(to: :email, subject: 'Welcome to My Awesome Site')
    end
end
