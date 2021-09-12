<?php $title = 'Deuxième'; ?>

<?php ob_start(); ?>
<?php include("../postContent/2.php"); ?>
<?php $content = ob_get_clean(); ?>

<?php require('template.php'); ?>
