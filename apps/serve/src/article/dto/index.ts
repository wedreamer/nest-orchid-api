import { Tag } from '@libs/db/entity/tag.entity';
import { ApiProperty } from '@nestjs/swagger';
import { PageOptionsDto } from 'apps/shared/dto/page.dto';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsArray,
} from 'class-validator';

export class ArticleDto {
  @ApiProperty({
    description: '帖子标题',
    required: false,
  })
  @IsString({ message: '帖子标题不是有效的数据' })
  readonly title: string;

  @ApiProperty({
    description: '帖子内容',
    required: false,
  })
  @IsString({ message: '帖子内容不是有效的数据' })
  readonly content: string;

  @ApiProperty({
    description: '帖子图片',
    required: false,
  })
  @IsArray({ message: '帖子内容不是有效的数据' })
  readonly image: string[];

  @ApiProperty({
    description: '帖子分类',
    example: 1,
    required: false,
  })
  readonly categoryId: number;

  @ApiProperty({
    description: '帖子权限',
    example: 1,
  })
  readonly status: number;

  @ApiProperty({
    description: '帖子类型',
    example: 1,
  })
  readonly type: boolean;

  @ApiProperty({
    description: '帖子标签',
    example: [],
    required: false,
  })
  readonly tag: Tag[];
}

export class FindArticleDto extends PageOptionsDto {
  @ApiProperty({
    description: '分类',
    required: false,
    example: 2,
  })
  readonly categoryId: number;
}

export class SearchArticleDto extends PageOptionsDto {
  @ApiProperty({
    description: '文章标题',
    example: '',
    required: false,
  })
  @IsOptional()
  readonly title: string;
}

export class CreateArticleLikeDto {
  @ApiProperty({
    description: '帖子ID',
  })
  @IsNumber({}, { message: '数据类型不正确' })
  @IsNotEmpty({ message: '帖子ID不能为空' })
  readonly articleId: number;
}
