class UserMailer < ApplicationMailer
    default from: ENV['GMAIL_USERNAME']

    def info_email
      @user = params[:user]

      mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    end
end
