#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDragInteraction_symbols(JSContext*);
@protocol UIDragInteractionInstanceExports<JSExport, UIInteractionInstanceExports_>
@property (nonatomic) BOOL allowsSimultaneousRecognitionDuringLift;
@property (getter=isEnabled,nonatomic) BOOL enabled;
@property (readonly,nonatomic,weak) id delegate;
JSExportAs(initWithDelegate,
-(id) jsinitWithDelegate: (id) delegate );
@end
@protocol UIDragInteractionClassExports<JSExport, UIInteractionClassExports_>
+(BOOL) isEnabledByDefault;
@end
@protocol UIDragAnimatingInstanceExports_<JSExport, NSObjectInstanceExports_>
JSExportAs(addCompletion,
-(void) jsaddCompletion: (JSValue *) completion );
JSExportAs(addAnimations,
-(void) jsaddAnimations: (JSValue *) animations );
@end
@protocol UIDragAnimatingClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIDragInteractionDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) dragInteraction: (UIDragInteraction *) interaction item: (UIDragItem *) item willAnimateCancelWithAnimator: (id) animator ;
-(void) dragInteraction: (UIDragInteraction *) interaction willAnimateLiftWithAnimator: (id) animator session: (id) session ;
-(void) dragInteraction: (UIDragInteraction *) interaction sessionWillBegin: (id) session ;
-(void) dragInteraction: (UIDragInteraction *) interaction sessionDidTransferItems: (id) session ;
-(BOOL) dragInteraction: (UIDragInteraction *) interaction prefersFullSizePreviewsForSession: (id) session ;
-(BOOL) dragInteraction: (UIDragInteraction *) interaction sessionAllowsMoveOperation: (id) session ;
-(BOOL) dragInteraction: (UIDragInteraction *) interaction sessionIsRestrictedToDraggingApplication: (id) session ;
-(void) dragInteraction: (UIDragInteraction *) interaction session: (id) session willAddItems: (NSArray *) items forInteraction: (UIDragInteraction *) addingInteraction ;
-(NSArray *) dragInteraction: (UIDragInteraction *) interaction itemsForAddingToSession: (id) session withTouchAtPoint: (CGPoint) point ;
-(void) dragInteraction: (UIDragInteraction *) interaction session: (id) session didEndWithOperation: (UIDropOperation) operation ;
-(NSArray *) dragInteraction: (UIDragInteraction *) interaction itemsForBeginningSession: (id) session ;
-(UITargetedDragPreview *) dragInteraction: (UIDragInteraction *) interaction previewForCancellingItem: (UIDragItem *) item withDefault: (UITargetedDragPreview *) defaultPreview ;
-(void) dragInteraction: (UIDragInteraction *) interaction sessionDidMove: (id) session ;
-(void) dragInteraction: (UIDragInteraction *) interaction session: (id) session willEndWithOperation: (UIDropOperation) operation ;
-(id) dragInteraction: (UIDragInteraction *) interaction sessionForAddingItems: (NSArray *) sessions withTouchAtPoint: (CGPoint) point ;
-(UITargetedDragPreview *) dragInteraction: (UIDragInteraction *) interaction previewForLiftingItem: (UIDragItem *) item session: (id) session ;
@end
@protocol UIDragInteractionDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop