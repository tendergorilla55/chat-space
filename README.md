# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|mail|string|index: true, nill: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through: group_users
- has_many :messages
- has_many :group_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true, unique: true|

### Association
- has_many :users, through: group_users
- has_many :group_users
- varidates :name, presence :true

## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|foreign_key: true|
|group|references|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user|references|foreign_key: true|
|group|references|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
