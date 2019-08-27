#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITextDropping_symbols(JSContext*);
@protocol UITextDroppableInstanceExports_<JSExport, UITextInputInstanceExports_, UITextPasteConfigurationSupportingInstanceExports_>
@property (readonly,nonatomic) UIDropInteraction * textDropInteraction;
@property (nonatomic,weak) id textDropDelegate;
@property (getter=isTextDropActive,readonly,nonatomic) _Bool textDropActive;
@end
@protocol UITextDroppableClassExports_<JSExport, UITextInputClassExports_, UITextPasteConfigurationSupportingClassExports_>
@end
@protocol UITextDropRequestInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) id dropSession;
@property (readonly,nonatomic) UITextPosition * dropPosition;
@property (getter=isSameView,readonly,nonatomic) BOOL sameView;
@property (readonly,nonatomic) UITextDropProposal * suggestedProposal;
@end
@protocol UITextDropRequestClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITextDropDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) textDroppableView: (UIView *) textDroppableView dropSessionDidExit: (id) session ;
-(UITextDropProposal *) textDroppableView: (UIView *) textDroppableView proposalForDrop: (id) drop ;
-(void) textDroppableView: (UIView *) textDroppableView willPerformDrop: (id) drop ;
-(UITextDropEditability) textDroppableView: (UIView *) textDroppableView willBecomeEditableForDrop: (id) drop ;
-(UITargetedDragPreview *) textDroppableView: (UIView *) textDroppableView previewForDroppingAllItemsWithDefault: (UITargetedDragPreview *) defaultPreview ;
-(void) textDroppableView: (UIView *) textDroppableView dropSessionDidEnd: (id) session ;
-(void) textDroppableView: (UIView *) textDroppableView dropSessionDidUpdate: (id) session ;
-(void) textDroppableView: (UIView *) textDroppableView dropSessionDidEnter: (id) session ;
@end
@protocol UITextDropDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop