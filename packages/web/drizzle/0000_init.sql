CREATE TABLE `enquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`organisation` text,
	`engagement` text NOT NULL,
	`message` text NOT NULL,
	`budget` text,
	`timeline` text,
	`created_at` integer NOT NULL
);
