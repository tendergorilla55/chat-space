require 'rails_helper'

describe Message do
  describe '#create' do

    it "is valid with body" do
      message = build(:message, image: nil)
      expect(message).to be_valid
    end

    it "is valid with image" do
      message = build(:message, body: nil)
      expect(message).to be_valid
    end

    it "is valid with body, image" do
      message = build(:message)
      expect(message).to be_valid
    end

    it "is invalid without body, image" do
      message = build(:message, body: nil, image: nil)
      message.valid?
      expect(message.errors)

  end
end
