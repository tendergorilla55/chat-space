json.array! @new_messages do |message|
  json.name message.user.name
  json.time message.created_at
  json.body message.body
  json.image message.image
  json.id message.id
end
