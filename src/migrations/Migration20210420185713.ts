import { Migration } from '@mikro-orm/migrations';

export class Migration20210420185713 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `task` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `title` text not null) default character set utf8mb4 engine = InnoDB;');
  }

}
