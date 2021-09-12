<?php $title = 'Premier'; ?>

<?php ob_start(); ?>
<?php include("../postContent/1.php"); ?>
<?php $content = ob_get_clean(); ?>

<?php require('template.php'); ?>
