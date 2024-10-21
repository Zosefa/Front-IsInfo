SELECT ex.id_examen,C.id_cours,E.matricule,Pe.nom,Pe.prenom,P.codep,Se.semestre FROM examen ex
    LEFT JOIN Cours C on C.id_cours = ex.cours_id
    LEFT JOIN Promotion P on P.id_promotion = C.promotion_id
    LEFT JOIN Etudiant E on E.promotion_id = P.id_promotion
    LEFT JOIN Personne Pe on Pe.id_personne = E.id_personne
    LEFT JOIN Semestre Se on Se.id_semestre = ex.semestre_id
    WHERE ex.id_examen = 1;

SELECT PM.id_professeur_matiere,M.id_matiere,M.nom_matiere FROM Professeur_Matiere PM
    LEFT JOIN Matiere M on M.id_matiere = PM.matiere_id
    LEFT JOIN Cours C on C.id_cours = PM.id_cours
    WHERE C.id_cours = 2;
