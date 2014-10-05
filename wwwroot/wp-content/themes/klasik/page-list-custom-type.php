<?php
/**
 * Template Name: Events Page
 *
 * Selectable from a dropdown menu on the edit page screen.

 * @package WordPress
 * @subpackage Klasik
 * @since Klasik 1.0
 */

get_header(); ?>
                        
	<?php query_posts( 'post_type=event'); ?>

	<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
        <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            
            <?php the_content( __( 'Read More', 'klasik' ) ); ?>
            <?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'klasik' ), 'after' => '</div>' ) ); ?>
            <?php edit_post_link( __( 'Edit', 'klasik' ), '<span class="edit-link">', '</span>' ); ?>
            <div class="clear"></div>
            
        </div><!-- #post -->

        <?php comments_template( '', true ); ?>

        <?php endwhile; ?>
        
        <div class="clear"></div><!-- clear float --> 
                  	
<?php get_footer(); ?>