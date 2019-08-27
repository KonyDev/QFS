#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITableView_symbols(JSContext*);
@protocol UITableViewFocusUpdateContextInstanceExports<JSExport>
@property (readonly,nonatomic,strong) NSIndexPath * previouslyFocusedIndexPath;
@property (readonly,nonatomic,strong) NSIndexPath * nextFocusedIndexPath;
@end
@protocol UITableViewFocusUpdateContextClassExports<JSExport>
@end
@protocol UITableViewRowActionInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,nonatomic) UITableViewRowActionStyle style;
@property (copy,nonatomic) UIVisualEffect * backgroundEffect;
@property (copy,nonatomic) UIColor * backgroundColor;
@property (copy,nonatomic) NSString * title;
@end
@protocol UITableViewRowActionClassExports<JSExport, NSCopyingClassExports_>
JSExportAs(rowActionWithStyleTitleHandler,
+(id) jsrowActionWithStyle: (UITableViewRowActionStyle) style title: (NSString *) title handler: (JSValue *) handler );
@end
@protocol UITableViewDropPlaceholderInstanceExports<JSExport>
@property (getter=getJsPreviewParametersProvider,setter=setJsPreviewParametersProvider:) JSValue* jspreviewParametersProvider;
@end
@protocol UITableViewDropPlaceholderClassExports<JSExport>
@end
@protocol UITableViewDropProposalInstanceExports<JSExport>
@property (readonly,nonatomic) UITableViewDropIntent intent;
JSExportAs(initWithDropOperationIntent,
-(id) jsinitWithDropOperation: (UIDropOperation) operation intent: (UITableViewDropIntent) intent );
@end
@protocol UITableViewDropProposalClassExports<JSExport>
@end
@protocol UITableViewUIDragAndDropCategoryInstanceExports<JSExport, UISpringLoadedInteractionSupportingInstanceExports_>
@end
@protocol UITableViewUIDragAndDropCategoryClassExports<JSExport, UISpringLoadedInteractionSupportingClassExports_>
@end
@protocol UITableViewPlaceholderInstanceExports<JSExport>
@property (getter=getJsCellUpdateHandler,setter=setJsCellUpdateHandler:) JSValue* jscellUpdateHandler;
JSExportAs(initWithInsertionIndexPathReuseIdentifierRowHeight,
-(id) jsinitWithInsertionIndexPath: (NSIndexPath *) insertionIndexPath reuseIdentifier: (NSString *) reuseIdentifier rowHeight: (CGFloat) rowHeight );
@end
@protocol UITableViewPlaceholderClassExports<JSExport>
@end
@protocol UITableViewInstanceExports<JSExport, NSCodingInstanceExports_, UIDataSourceTranslatingInstanceExports_>
@property (nonatomic) CGFloat estimatedRowHeight;
@property (nonatomic) BOOL allowsSelection;
@property (nonatomic,strong) UIColor * separatorColor;
@property (readonly,nonatomic) BOOL hasActiveDrop;
@property (nonatomic) CGFloat sectionHeaderHeight;
@property (nonatomic) CGFloat estimatedSectionHeaderHeight;
@property (nonatomic) BOOL allowsSelectionDuringEditing;
@property (nonatomic) CGFloat estimatedSectionFooterHeight;
@property (readonly,nonatomic) NSIndexPath * indexPathForSelectedRow;
@property (readonly,nonatomic) UITableViewStyle style;
@property (nonatomic,strong) UIView * tableHeaderView;
@property (readonly,nonatomic) NSArray * indexPathsForVisibleRows;
@property (nonatomic,strong) UIColor * sectionIndexColor;
@property (readonly,nonatomic) BOOL hasUncommittedUpdates;
@property (nonatomic) NSInteger sectionIndexMinimumDisplayRowCount;
@property (readonly,nonatomic) NSArray * indexPathsForSelectedRows;
@property (nonatomic) BOOL dragInteractionEnabled;
@property (nonatomic,strong) UIColor * sectionIndexTrackingBackgroundColor;
@property (nonatomic) BOOL cellLayoutMarginsFollowReadableWidth;
@property (nonatomic) UIEdgeInsets separatorInset;
@property (nonatomic) BOOL allowsMultipleSelection;
@property (nonatomic) UITableViewSeparatorInsetReference separatorInsetReference;
@property (nonatomic,weak) id dataSource;
@property (nonatomic) UITableViewCellSeparatorStyle separatorStyle;
@property (copy,nonatomic) UIVisualEffect * separatorEffect;
@property (getter=isEditing,nonatomic) BOOL editing;
@property (readonly,nonatomic) NSArray * visibleCells;
@property (nonatomic,strong) UIView * tableFooterView;
@property (nonatomic) CGFloat rowHeight;
@property (nonatomic) BOOL allowsMultipleSelectionDuringEditing;
@property (nonatomic) BOOL remembersLastFocusedIndexPath;
@property (nonatomic) BOOL insetsContentViewsToSafeArea;
@property (nonatomic,weak) id dragDelegate;
@property (nonatomic,weak) id prefetchDataSource;
@property (readonly,nonatomic) NSInteger numberOfSections;
@property (nonatomic,strong) UIColor * sectionIndexBackgroundColor;
@property (nonatomic,weak) id delegate;
@property (readonly,nonatomic) BOOL hasActiveDrag;
@property (nonatomic,weak) id dropDelegate;
@property (nonatomic,strong) UIView * backgroundView;
@property (nonatomic) CGFloat sectionFooterHeight;
JSExportAs(performBatchUpdatesCompletion,
-(void) jsperformBatchUpdates: (JSValue *) updates completion: (JSValue *) completion );
-(__kindof UITableViewCell *) dequeueReusableCellWithIdentifier: (NSString *) identifier forIndexPath: (NSIndexPath *) indexPath ;
-(void) deleteSections: (NSIndexSet *) sections withRowAnimation: (UITableViewRowAnimation) animation ;
-(NSInteger) numberOfRowsInSection: (NSInteger) section ;
-(void) moveRowAtIndexPath: (NSIndexPath *) indexPath toIndexPath: (NSIndexPath *) newIndexPath ;
-(UITableViewHeaderFooterView *) footerViewForSection: (NSInteger) section ;
JSExportAs(registerClassForCellReuseIdentifier,
-(void) jsregisterClass: (JSValue *) cellClass forCellReuseIdentifier: (NSString *) identifier );
-(void) reloadSections: (NSIndexSet *) sections withRowAnimation: (UITableViewRowAnimation) animation ;
-(void) registerNib: (UINib *) nib forHeaderFooterViewReuseIdentifier: (NSString *) identifier ;
-(void) scrollToNearestSelectedRowAtScrollPosition: (UITableViewScrollPosition) scrollPosition animated: (BOOL) animated ;
JSExportAs(registerClassForHeaderFooterViewReuseIdentifier,
-(void) jsregisterClass: (JSValue *) aClass forHeaderFooterViewReuseIdentifier: (NSString *) identifier );
-(__kindof UITableViewCell *) cellForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) insertRowsAtIndexPaths: (NSArray *) indexPaths withRowAnimation: (UITableViewRowAnimation) animation ;
-(CGRect) rectForSection: (NSInteger) section ;
-(void) selectRowAtIndexPath: (NSIndexPath *) indexPath animated: (BOOL) animated scrollPosition: (UITableViewScrollPosition) scrollPosition ;
-(void) scrollToRowAtIndexPath: (NSIndexPath *) indexPath atScrollPosition: (UITableViewScrollPosition) scrollPosition animated: (BOOL) animated ;
-(UITableViewHeaderFooterView *) headerViewForSection: (NSInteger) section ;
-(void) insertSections: (NSIndexSet *) sections withRowAnimation: (UITableViewRowAnimation) animation ;
-(void) reloadSectionIndexTitles;
-(__kindof UITableViewCell *) dequeueReusableCellWithIdentifier: (NSString *) identifier ;
-(NSIndexPath *) indexPathForRowAtPoint: (CGPoint) point ;
-(void) registerNib: (UINib *) nib forCellReuseIdentifier: (NSString *) identifier ;
-(void) reloadData;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithFrameStyle,
-(id) jsinitWithFrame: (CGRect) frame style: (UITableViewStyle) style );
-(CGRect) rectForHeaderInSection: (NSInteger) section ;
-(CGRect) rectForFooterInSection: (NSInteger) section ;
-(void) moveSection: (NSInteger) section toSection: (NSInteger) newSection ;
-(void) setEditing: (BOOL) editing animated: (BOOL) animated ;
-(NSIndexPath *) indexPathForCell: (UITableViewCell *) cell ;
-(void) deselectRowAtIndexPath: (NSIndexPath *) indexPath animated: (BOOL) animated ;
-(void) endUpdates;
-(void) deleteRowsAtIndexPaths: (NSArray *) indexPaths withRowAnimation: (UITableViewRowAnimation) animation ;
-(NSArray *) indexPathsForRowsInRect: (CGRect) rect ;
-(void) reloadRowsAtIndexPaths: (NSArray *) indexPaths withRowAnimation: (UITableViewRowAnimation) animation ;
-(CGRect) rectForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(__kindof UITableViewHeaderFooterView *) dequeueReusableHeaderFooterViewWithIdentifier: (NSString *) identifier ;
-(void) beginUpdates;
@end
@protocol UITableViewClassExports<JSExport, NSCodingClassExports_, UIDataSourceTranslatingClassExports_>
@end
@protocol UITableViewDataSourcePrefetchingInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) tableView: (UITableView *) tableView prefetchRowsAtIndexPaths: (NSArray *) indexPaths ;
-(void) tableView: (UITableView *) tableView cancelPrefetchingForRowsAtIndexPaths: (NSArray *) indexPaths ;
@end
@protocol UITableViewDataSourcePrefetchingClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITableViewDelegateInstanceExports_<JSExport, NSObjectInstanceExports_, UIScrollViewDelegateInstanceExports_>
-(NSIndexPath *) tableView: (UITableView *) tableView targetIndexPathForMoveFromRowAtIndexPath: (NSIndexPath *) sourceIndexPath toProposedIndexPath: (NSIndexPath *) proposedDestinationIndexPath ;
-(UITableViewCellEditingStyle) tableView: (UITableView *) tableView editingStyleForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView didEndDisplayingCell: (UITableViewCell *) cell forRowAtIndexPath: (NSIndexPath *) indexPath ;
-(CGFloat) tableView: (UITableView *) tableView heightForFooterInSection: (NSInteger) section ;
-(void) tableView: (UITableView *) tableView didDeselectRowAtIndexPath: (NSIndexPath *) indexPath ;
-(NSIndexPath *) tableView: (UITableView *) tableView willDeselectRowAtIndexPath: (NSIndexPath *) indexPath ;
-(NSArray *) tableView: (UITableView *) tableView editActionsForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(CGFloat) tableView: (UITableView *) tableView heightForHeaderInSection: (NSInteger) section ;
-(void) tableView: (UITableView *) tableView willDisplayHeaderView: (UIView *) view forSection: (NSInteger) section ;
-(BOOL) tableView: (UITableView *) tableView canFocusRowAtIndexPath: (NSIndexPath *) indexPath ;
-(UISwipeActionsConfiguration *) tableView: (UITableView *) tableView trailingSwipeActionsConfigurationForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView didUpdateFocusInContext: (UITableViewFocusUpdateContext *) context withAnimationCoordinator: (UIFocusAnimationCoordinator *) coordinator ;
-(UIView *) tableView: (UITableView *) tableView viewForHeaderInSection: (NSInteger) section ;
-(void) tableView: (UITableView *) tableView didEndEditingRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView didSelectRowAtIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) tableView: (UITableView *) tableView shouldUpdateFocusInContext: (UITableViewFocusUpdateContext *) context ;
-(void) tableView: (UITableView *) tableView accessoryButtonTappedForRowWithIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView didHighlightRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView didUnhighlightRowAtIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) tableView: (UITableView *) tableView shouldShowMenuForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(CGFloat) tableView: (UITableView *) tableView heightForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(NSInteger) tableView: (UITableView *) tableView indentationLevelForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(CGFloat) tableView: (UITableView *) tableView estimatedHeightForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(UIView *) tableView: (UITableView *) tableView viewForFooterInSection: (NSInteger) section ;
JSExportAs(tableViewPerformActionForRowAtIndexPathWithSender,
-(void) jstableView: (UITableView *) tableView performAction: (NSString *) action forRowAtIndexPath: (NSIndexPath *) indexPath withSender: (id) sender );
-(BOOL) tableView: (UITableView *) tableView shouldSpringLoadRowAtIndexPath: (NSIndexPath *) indexPath withContext: (id) context ;
-(UITableViewCellAccessoryType) tableView: (UITableView *) tableView accessoryTypeForRowWithIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) tableView: (UITableView *) tableView shouldHighlightRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView willDisplayCell: (UITableViewCell *) cell forRowAtIndexPath: (NSIndexPath *) indexPath ;
-(UISwipeActionsConfiguration *) tableView: (UITableView *) tableView leadingSwipeActionsConfigurationForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(NSIndexPath *) tableView: (UITableView *) tableView willSelectRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView didEndDisplayingFooterView: (UIView *) view forSection: (NSInteger) section ;
-(BOOL) tableView: (UITableView *) tableView shouldIndentWhileEditingRowAtIndexPath: (NSIndexPath *) indexPath ;
-(NSIndexPath *) indexPathForPreferredFocusedViewInTableView: (UITableView *) tableView ;
-(CGFloat) tableView: (UITableView *) tableView estimatedHeightForFooterInSection: (NSInteger) section ;
-(void) tableView: (UITableView *) tableView didEndDisplayingHeaderView: (UIView *) view forSection: (NSInteger) section ;
-(void) tableView: (UITableView *) tableView willDisplayFooterView: (UIView *) view forSection: (NSInteger) section ;
-(NSString *) tableView: (UITableView *) tableView titleForDeleteConfirmationButtonForRowAtIndexPath: (NSIndexPath *) indexPath ;
JSExportAs(tableViewCanPerformActionForRowAtIndexPathWithSender,
-(BOOL) jstableView: (UITableView *) tableView canPerformAction: (NSString *) action forRowAtIndexPath: (NSIndexPath *) indexPath withSender: (id) sender );
-(CGFloat) tableView: (UITableView *) tableView estimatedHeightForHeaderInSection: (NSInteger) section ;
-(void) tableView: (UITableView *) tableView willBeginEditingRowAtIndexPath: (NSIndexPath *) indexPath ;
@end
@protocol UITableViewDelegateClassExports_<JSExport, NSObjectClassExports_, UIScrollViewDelegateClassExports_>
@end
@protocol UITableViewDropPlaceholderContextInstanceExports_<JSExport, UIDragAnimatingInstanceExports_>
@property (readonly,nonatomic) UIDragItem * dragItem;
JSExportAs(commitInsertionWithDataSourceUpdates,
-(BOOL) jscommitInsertionWithDataSourceUpdates: (JSValue *) dataSourceUpdates );
-(BOOL) deletePlaceholder;
@end
@protocol UITableViewDropPlaceholderContextClassExports_<JSExport, UIDragAnimatingClassExports_>
@end
@protocol UITableViewDropCoordinatorInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) NSArray * items;
@property (readonly,nonatomic) UITableViewDropProposal * proposal;
@property (readonly,nonatomic) id session;
@property (readonly,nonatomic) NSIndexPath * destinationIndexPath;
-(id) dropItem: (UIDragItem *) dragItem toRowAtIndexPath: (NSIndexPath *) indexPath ;
-(id) dropItem: (UIDragItem *) dragItem intoRowAtIndexPath: (NSIndexPath *) indexPath rect: (CGRect) rect ;
-(id) dropItem: (UIDragItem *) dragItem toPlaceholder: (UITableViewDropPlaceholder *) placeholder ;
-(id) dropItem: (UIDragItem *) dragItem toTarget: (UIDragPreviewTarget *) target ;
@end
@protocol UITableViewDropCoordinatorClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITableViewDataSourceInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSString *) tableView: (UITableView *) tableView titleForFooterInSection: (NSInteger) section ;
-(NSInteger) tableView: (UITableView *) tableView numberOfRowsInSection: (NSInteger) section ;
-(NSArray *) sectionIndexTitlesForTableView: (UITableView *) tableView ;
-(NSInteger) tableView: (UITableView *) tableView sectionForSectionIndexTitle: (NSString *) title atIndex: (NSInteger) index ;
-(UITableViewCell *) tableView: (UITableView *) tableView cellForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView commitEditingStyle: (UITableViewCellEditingStyle) editingStyle forRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView moveRowAtIndexPath: (NSIndexPath *) sourceIndexPath toIndexPath: (NSIndexPath *) destinationIndexPath ;
-(NSString *) tableView: (UITableView *) tableView titleForHeaderInSection: (NSInteger) section ;
-(BOOL) tableView: (UITableView *) tableView canMoveRowAtIndexPath: (NSIndexPath *) indexPath ;
-(NSInteger) numberOfSectionsInTableView: (UITableView *) tableView ;
-(BOOL) tableView: (UITableView *) tableView canEditRowAtIndexPath: (NSIndexPath *) indexPath ;
@end
@protocol UITableViewDataSourceClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITableViewDragDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSArray *) tableView: (UITableView *) tableView itemsForAddingToDragSession: (id) session atIndexPath: (NSIndexPath *) indexPath point: (CGPoint) point ;
-(NSArray *) tableView: (UITableView *) tableView itemsForBeginningDragSession: (id) session atIndexPath: (NSIndexPath *) indexPath ;
-(UIDragPreviewParameters *) tableView: (UITableView *) tableView dragPreviewParametersForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(BOOL) tableView: (UITableView *) tableView dragSessionAllowsMoveOperation: (id) session ;
-(void) tableView: (UITableView *) tableView dragSessionDidEnd: (id) session ;
-(BOOL) tableView: (UITableView *) tableView dragSessionIsRestrictedToDraggingApplication: (id) session ;
-(void) tableView: (UITableView *) tableView dragSessionWillBegin: (id) session ;
@end
@protocol UITableViewDragDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITableViewDropDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UITableViewDropProposal *) tableView: (UITableView *) tableView dropSessionDidUpdate: (id) session withDestinationIndexPath: (NSIndexPath *) destinationIndexPath ;
-(UIDragPreviewParameters *) tableView: (UITableView *) tableView dropPreviewParametersForRowAtIndexPath: (NSIndexPath *) indexPath ;
-(void) tableView: (UITableView *) tableView dropSessionDidEnd: (id) session ;
-(BOOL) tableView: (UITableView *) tableView canHandleDropSession: (id) session ;
-(void) tableView: (UITableView *) tableView performDropWithCoordinator: (id) coordinator ;
-(void) tableView: (UITableView *) tableView dropSessionDidEnter: (id) session ;
-(void) tableView: (UITableView *) tableView dropSessionDidExit: (id) session ;
@end
@protocol UITableViewDropDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITableViewDropItemInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UIDragItem * dragItem;
@property (readonly,nonatomic) CGSize previewSize;
@property (readonly,nonatomic) NSIndexPath * sourceIndexPath;
@end
@protocol UITableViewDropItemClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop