json.array!(@people) do |person|
  json.extract! person, :id, :name, :lastName, :email, :skype, :phone, :age, :sex
  json.url person_url(person, format: :json)
end
