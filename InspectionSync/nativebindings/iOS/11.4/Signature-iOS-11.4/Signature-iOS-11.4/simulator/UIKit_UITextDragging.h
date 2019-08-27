#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITextDragging_symbols(JSContext*);
@protocol UITextDragRequestInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) NSArray * existingItems;
@property (readonly,nonatomic) NSArray * suggestedItems;
@property (getter=isSelected,readonly,nonatomic) BOOL selected;
@property (readonly,nonatomic) UITextRange * dragRange;
@property (readonly,nonatomic) id dragSession;
@end
@protocol UITextDragRequestClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITextDragDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) textDraggableView: (UIView *) textDraggableView dragSessionDidEnd: (id) session withOperation: (UIDropOperation) operation ;
-(UITargetedDragPreview *) textDraggableView: (UIView *) textDraggableView dragPreviewForLiftingItem: (UIDragItem *) item session: (id) session ;
-(void) textDraggableView: (UIView *) textDraggableView willAnimateLiftWithAnimator: (id) animator session: (id) session ;
-(void) textDraggableView: (UIView *) textDraggableView dragSessionWillBegin: (id) session ;
-(NSArray *) textDraggableView: (UIView *) textDraggableView itemsForDrag: (id) dragRequest ;
@end
@protocol UITextDragDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITextDraggableInstanceExports_<JSExport, UITextInputInstanceExports_>
@property (nonatomic) UITextDragOptions textDragOptions;
@property (readonly,nonatomic) UIDragInteraction * textDragInteraction;
@property (getter=isTextDragActive,readonly,nonatomic) BOOL textDragActive;
@property (nonatomic,weak) id textDragDelegate;
@end
@protocol UITextDraggableClassExports_<JSExport, UITextInputClassExports_>
@end
#pragma clang diagnostic pop