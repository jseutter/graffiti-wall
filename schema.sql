create database graffiti;
use graffiti;

create table graffitis (
	id integer primary key auto_increment,
	title varchar(255) not null,
	tag text not null,
	font text not null,
	created timestamp not null default now()
);

insert into graffitis (title, tag, font)
values
('Wall', 'Wyld Stylz', 'default'),
('Post', '2L8TE F8TE', 'default');

