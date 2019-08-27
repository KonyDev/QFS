#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UICollectionView_symbols(JSContext*);
@protocol UICollectionViewDropPlaceholderInstanceExports<JSExport>
@property (getter=getJsPreviewParametersProvider,setter=setJsPreviewParametersProvider:) JSValue* jspreviewParametersProvider;
@end
@protocol UICollectionViewDropPlaceholderClassExports<JSExport>
@end
@protocol UICollectionViewFocusUpdateContextInstanceExports<JSExport>
@property (readonly,nonatomic,strong) NSIndexPath * previouslyFocusedIndexPath;
@property (readonly,nonatomic,strong) NSIndexPath * nextFocusedIndexPath;
@end
@protocol UICollectionViewFocusUpdateContextClassExports<JSExport>
@end
@protocol UICollectionViewDropProposalInstanceExports<JSExport>
@property (readonly,nonatomic) UICollectionViewDropIntent intent;
JSExportAs(initWithDropOperationIntent,
-(id) jsinitWithDropOperation: (UIDropOperation) operation intent: (UICollectionViewDropIntent) intent );
@end
@protocol UICollectionViewDropProposalClassExports<JSExport>
@end
@protocol UICollectionViewUIDragAndDropCategoryInstanceExports<JSExport, UISpringLoadedInteractionSupportingInstanceExports_>
@end
@protocol UICollectionViewUIDragAndDropCategoryClassExports<JSExport, UISpringLoadedInteractionSupportingClassExports_>
@end
@protocol UICollectionViewInstanceExports<JSExport, UIDataSourceTranslatingInstanceExports_>
@property (readonly,nonatomic) BOOL hasActiveDrop;
@property (nonatomic,strong) UIView * backgroundView;
@property (nonatomic) BOOL dragInteractionEnabled;
@property (readonly,nonatomic) NSArray * indexPathsForVisibleItems;
@property (nonatomic) BOOL allowsSelection;
@property (readonly,nonatomic) NSArray * indexPathsForSelectedItems;
@property (nonatomic,weak) id dragDelegate;
@property (nonatomic,weak) id prefetchDataSource;
@property (readonly,nonatomic) NSArray * visibleCells;
@property (readonly,nonatomic) NSInteger numberOfSections;
@property (nonatomic,strong) UICollectionViewLayout * collectionViewLayout;
@property (nonatomic) BOOL allowsMultipleSelection;
@property (readonly,nonatomic) BOOL hasUncommittedUpdates;
@property (nonatomic,weak) id delegate;
@property (nonatomic) BOOL remembersLastFocusedIndexPath;
@property (readonly,nonatomic) BOOL hasActiveDrag;
@property (nonatomic,weak) id dropDelegate;
@property (getter=isPrefetchingEnabled,nonatomic) BOOL prefetchingEnabled;
@property (nonatomic) UICollectionViewReorderingCadence reorderingCadence;
@property (nonatomic,weak) id dataSource;
-(void) reloadItemsAtIndexPaths: (NSArray *) indexPaths ;
JSExportAs(performBatchUpdatesCompletion,
-(void) jsperformBatchUpdates: (JSValue *) updates completion: (JSValue *) completion );
-(NSIndexPath *) indexPathForItemAtPoint: (CGPoint) point ;
-(void) updateInteractiveMovementTargetPosition: (CGPoint) targetPosition ;
-(NSInteger) numberOfItemsInSection: (NSInteger) section ;
-(void) deselectItemAtIndexPath: (NSIndexPath *) indexPath animated: (BOOL) animated ;
-(void) deleteSections: (NSIndexSet *) sections ;
-(void) moveSection: (NSInteger) section toSection: (NSInteger) newSection ;
-(void) cancelInteractiveTransition;
-(void) registerNib: (UINib *) nib forSupplementaryViewOfKind: (NSString *) kind withReuseIdentifier: (NSString *) identifier ;
-(NSIndexPath *) indexPathForCell: (UICollectionViewCell *) cell ;
JSExportAs(setCollectionViewLayoutAnimatedCompletion,
-(void) jssetCollectionViewLayout: (UICollectionViewLayout *) layout animated: (BOOL) animated completion: (JSValue *) completion );
-(UICollectionReusableView *) supplementaryViewForElementKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) indexPath ;
-(void) reloadSections: (NSIndexSet *) sections ;
-(void) scrollToItemAtIndexPath: (NSIndexPath *) indexPath atScrollPosition: (UICollectionViewScrollPosition) scrollPosition animated: (BOOL) animated ;
JSExportAs(initWithFrameCollectionViewLayout,
-(id) jsinitWithFrame: (CGRect) frame collectionViewLayout: (UICollectionViewLayout *) layout );
-(void) endInteractiveMovement;
-(void) finishInteractiveTransition;
-(NSArray *) indexPathsForVisibleSupplementaryElementsOfKind: (NSString *) elementKind ;
-(BOOL) beginInteractiveMovementForItemAtIndexPath: (NSIndexPath *) indexPath ;
-(void) insertSections: (NSIndexSet *) sections ;
-(void) selectItemAtIndexPath: (NSIndexPath *) indexPath animated: (BOOL) animated scrollPosition: (UICollectionViewScrollPosition) scrollPosition ;
-(void) reloadData;
-(NSArray *) visibleSupplementaryViewsOfKind: (NSString *) elementKind ;
-(UICollectionViewLayoutAttributes *) layoutAttributesForSupplementaryElementOfKind: (NSString *) kind atIndexPath: (NSIndexPath *) indexPath ;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(__kindof UICollectionViewCell *) dequeueReusableCellWithReuseIdentifier: (NSString *) identifier forIndexPath: (NSIndexPath *) indexPath ;
-(void) setCollectionViewLayout: (UICollectionViewLayout *) layout animated: (BOOL) animated ;
-(UICollectionViewLayoutAttributes *) layoutAttributesForItemAtIndexPath: (NSIndexPath *) indexPath ;
JSExportAs(registerClassForSupplementaryViewOfKindWithReuseIdentifier,
-(void) jsregisterClass: (JSValue *) viewClass forSupplementaryViewOfKind: (NSString *) elementKind withReuseIdentifier: (NSString *) identifier );
-(UICollectionViewCell *) cellForItemAtIndexPath: (NSIndexPath *) indexPath ;
-(void) insertItemsAtIndexPaths: (NSArray *) indexPaths ;
-(__kindof UICollectionReusableView *) dequeueReusableSupplementaryViewOfKind: (NSString *) elementKind withReuseIdentifier: (NSString *) identifier forIndexPath: (NSIndexPath *) indexPath ;
-(void) cancelInteractiveMovement;
-(void) moveItemAtIndexPath: (NSIndexPath *) indexPath toIndexPath: (NSIndexPath *) newIndexPath ;
JSExportAs(registerClassForCellWithReuseIdentifier,
-(void) jsregisterClass: (JSValue *) cellClass forCellWithReuseIdentifier: (NSString *) identifier );
-(void) deleteItemsAtIndexPaths: (NSArray *) indexPaths ;
JSExportAs(startInteractiveTransitionToCollectionViewLayoutCompletion,
-(UICollectionViewTransitionLayout *) jsstartInteractiveTransitionToCollectionViewLayout: (UICollectionViewLayout *) layout completion: (JSValue *) completion );
-(void) registerNib: (UINib *) nib forCellWithReuseIdentifier: (NSString *) identifier ;
@end
@protocol UICollectionViewClassExports<JSExport, UIDataSourceTranslatingClassExports_>
@end
@protocol UICollectionViewPlaceholderInstanceExports<JSExport>
@property (getter=getJsCellUpdateHandler,setter=setJsCellUpdateHandler:) JSValue* jscellUpdateHandler;
JSExportAs(initWithInsertionIndexPathReuseIdentifier,
-(id) jsinitWithInsertionIndexPath: (NSIndexPath *) insertionIndexPath reuseIdentifier: (NSString *) reuseIdentifier );
@end
@protocol UICollectionViewPlaceholderClassExports<JSExport>
@end
@protocol UICollectionViewDropCoordinatorInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) NSArray * items;
@property (readonly,nonatomic) UICollectionViewDropProposal * proposal;
@property (readonly,nonatomic) id session;
@property (readonly,nonatomic) NSIndexPath * destinationIndexPath;
-(id) dropItem: (UIDragItem *) dragItem toPlaceholder: (UICollectionViewDropPlaceholder *) placeholder ;
-(id) dropItem: (UIDragItem *) dragItem intoItemAtIndexPath: (NSIndexPath *) indexPath rect: (CGRect) rect ;
-(id) dropItem: (UIDragItem *) dragItem toTarget: (UIDragPreviewTarget *) target ;
-(id) dropItem: (UIDragItem *) dragItem toItemAtIndexPath: (NSIndexPath *) indexPath ;
@end
@protocol UICollectionViewDropCoordinatorClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UICollectionViewDataSourcePrefetchingInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) collectionView: (UICollectionView *) collectionView prefetchItemsAtIndexPaths: (NSArray *) indexPaths ;
-(void) collectionView: (UICollectionView *) collectionView cancelPrefetchingForItemsAtIndexPaths: (NSArray *) indexPaths ;
@end
@protocol UICollectionViewDataSourcePrefetchingClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UICollectionViewDelegateInstanceExports_<JSExport, UIScrollViewDelegateInstanceExports_>
JSExportAs(collectionViewCanPerformActionForItemAtIndexPathWithSender,
-(BOOL) jscollectionView: (UICollectionView *) collectionView canPerformAction: (NSString *) action forItemAtIndexPath: (NSIndexPath *) indexPath withSender: (id) sender );
-(BOOL) collectionView: (UICollectionView *) collectionView shouldSpringLoadItemAtIndexPath: (NSIndexPath *) indexPath withContext: (id) context ;
-(BOOL) collectionView: (UICollectionView *) collectionView shouldSelectItemAtIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) collectionView: (UICollectionView *) collectionView shouldHighlightItemAtIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) collectionView: (UICollectionView *) collectionView canFocusItemAtIndexPath: (NSIndexPath *) indexPath ;
-(void) collectionView: (UICollectionView *) collectionView willDisplaySupplementaryView: (UICollectionReusableView *) view forElementKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) indexPath ;
JSExportAs(collectionViewPerformActionForItemAtIndexPathWithSender,
-(void) jscollectionView: (UICollectionView *) collectionView performAction: (NSString *) action forItemAtIndexPath: (NSIndexPath *) indexPath withSender: (id) sender );
-(CGPoint) collectionView: (UICollectionView *) collectionView targetContentOffsetForProposedContentOffset: (CGPoint) proposedContentOffset ;
-(void) collectionView: (UICollectionView *) collectionView didSelectItemAtIndexPath: (NSIndexPath *) indexPath ;
-(void) collectionView: (UICollectionView *) collectionView didUnhighlightItemAtIndexPath: (NSIndexPath *) indexPath ;
-(void) collectionView: (UICollectionView *) collectionView didUpdateFocusInContext: (UICollectionViewFocusUpdateContext *) context withAnimationCoordinator: (UIFocusAnimationCoordinator *) coordinator ;
-(void) collectionView: (UICollectionView *) collectionView didDeselectItemAtIndexPath: (NSIndexPath *) indexPath ;
-(NSIndexPath *) collectionView: (UICollectionView *) collectionView targetIndexPathForMoveFromItemAtIndexPath: (NSIndexPath *) originalIndexPath toProposedIndexPath: (NSIndexPath *) proposedIndexPath ;
-(NSIndexPath *) indexPathForPreferredFocusedViewInCollectionView: (UICollectionView *) collectionView ;
-(void) collectionView: (UICollectionView *) collectionView willDisplayCell: (UICollectionViewCell *) cell forItemAtIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) collectionView: (UICollectionView *) collectionView shouldShowMenuForItemAtIndexPath: (NSIndexPath *) indexPath ;
-(void) collectionView: (UICollectionView *) collectionView didHighlightItemAtIndexPath: (NSIndexPath *) indexPath ;
-(void) collectionView: (UICollectionView *) collectionView didEndDisplayingCell: (UICollectionViewCell *) cell forItemAtIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) collectionView: (UICollectionView *) collectionView shouldUpdateFocusInContext: (UICollectionViewFocusUpdateContext *) context ;
-(BOOL) collectionView: (UICollectionView *) collectionView shouldDeselectItemAtIndexPath: (NSIndexPath *) indexPath ;
-(UICollectionViewTransitionLayout *) collectionView: (UICollectionView *) collectionView transitionLayoutForOldLayout: (UICollectionViewLayout *) fromLayout newLayout: (UICollectionViewLayout *) toLayout ;
-(void) collectionView: (UICollectionView *) collectionView didEndDisplayingSupplementaryView: (UICollectionReusableView *) view forElementOfKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) indexPath ;
@end
@protocol UICollectionViewDelegateClassExports_<JSExport, UIScrollViewDelegateClassExports_>
@end
@protocol UICollectionViewDropDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UIDragPreviewParameters *) collectionView: (UICollectionView *) collectionView dropPreviewParametersForItemAtIndexPath: (NSIndexPath *) indexPath ;
-(void) collectionView: (UICollectionView *) collectionView dropSessionDidEnter: (id) session ;
-(void) collectionView: (UICollectionView *) collectionView dropSessionDidExit: (id) session ;
-(void) collectionView: (UICollectionView *) collectionView dropSessionDidEnd: (id) session ;
-(UICollectionViewDropProposal *) collectionView: (UICollectionView *) collectionView dropSessionDidUpdate: (id) session withDestinationIndexPath: (NSIndexPath *) destinationIndexPath ;
-(BOOL) collectionView: (UICollectionView *) collectionView canHandleDropSession: (id) session ;
-(void) collectionView: (UICollectionView *) collectionView performDropWithCoordinator: (id) coordinator ;
@end
@protocol UICollectionViewDropDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UICollectionViewDropItemInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UIDragItem * dragItem;
@property (readonly,nonatomic) CGSize previewSize;
@property (readonly,nonatomic) NSIndexPath * sourceIndexPath;
@end
@protocol UICollectionViewDropItemClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UICollectionViewDropPlaceholderContextInstanceExports_<JSExport, UIDragAnimatingInstanceExports_>
@property (readonly,nonatomic) UIDragItem * dragItem;
JSExportAs(commitInsertionWithDataSourceUpdates,
-(BOOL) jscommitInsertionWithDataSourceUpdates: (JSValue *) dataSourceUpdates );
-(BOOL) deletePlaceholder;
-(void) setNeedsCellUpdate;
@end
@protocol UICollectionViewDropPlaceholderContextClassExports_<JSExport, UIDragAnimatingClassExports_>
@end
@protocol UICollectionViewDataSourceInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UICollectionReusableView *) collectionView: (UICollectionView *) collectionView viewForSupplementaryElementOfKind: (NSString *) kind atIndexPath: (NSIndexPath *) indexPath ;
-(NSInteger) numberOfSectionsInCollectionView: (UICollectionView *) collectionView ;
-(NSArray *) indexTitlesForCollectionView: (UICollectionView *) collectionView ;
-(NSInteger) collectionView: (UICollectionView *) collectionView numberOfItemsInSection: (NSInteger) section ;
-(NSIndexPath *) collectionView: (UICollectionView *) collectionView indexPathForIndexTitle: (NSString *) title atIndex: (NSInteger) index ;
-(__kindof UICollectionViewCell *) collectionView: (UICollectionView *) collectionView cellForItemAtIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) collectionView: (UICollectionView *) collectionView canMoveItemAtIndexPath: (NSIndexPath *) indexPath ;
-(void) collectionView: (UICollectionView *) collectionView moveItemAtIndexPath: (NSIndexPath *) sourceIndexPath toIndexPath: (NSIndexPath *) destinationIndexPath ;
@end
@protocol UICollectionViewDataSourceClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UICollectionViewDragDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) collectionView: (UICollectionView *) collectionView dragSessionDidEnd: (id) session ;
-(NSArray *) collectionView: (UICollectionView *) collectionView itemsForBeginningDragSession: (id) session atIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) collectionView: (UICollectionView *) collectionView dragSessionIsRestrictedToDraggingApplication: (id) session ;
-(void) collectionView: (UICollectionView *) collectionView dragSessionWillBegin: (id) session ;
-(NSArray *) collectionView: (UICollectionView *) collectionView itemsForAddingToDragSession: (id) session atIndexPath: (NSIndexPath *) indexPath point: (CGPoint) point ;
-(BOOL) collectionView: (UICollectionView *) collectionView dragSessionAllowsMoveOperation: (id) session ;
-(UIDragPreviewParameters *) collectionView: (UICollectionView *) collectionView dragPreviewParametersForItemAtIndexPath: (NSIndexPath *) indexPath ;
@end
@protocol UICollectionViewDragDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop