#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDropInteraction_symbols(JSContext*);
@protocol UIDropInteractionInstanceExports<JSExport, UIInteractionInstanceExports_>
@property (assign,nonatomic) BOOL allowsSimultaneousDropSessions;
@property (readonly,nonatomic,weak) id delegate;
JSExportAs(initWithDelegate,
-(id) jsinitWithDelegate: (id) delegate );
@end
@protocol UIDropInteractionClassExports<JSExport, UIInteractionClassExports_>
@end
@protocol UIDropProposalInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (getter=isPrecise,nonatomic) BOOL precise;
@property (nonatomic) BOOL prefersFullSizePreview;
@property (readonly,nonatomic) UIDropOperation operation;
JSExportAs(initWithDropOperation,
-(id) jsinitWithDropOperation: (UIDropOperation) operation );
@end
@protocol UIDropProposalClassExports<JSExport, NSCopyingClassExports_>
@end
@protocol UIDropInteractionDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UITargetedDragPreview *) dropInteraction: (UIDropInteraction *) interaction previewForDroppingItem: (UIDragItem *) item withDefault: (UITargetedDragPreview *) defaultPreview ;
-(BOOL) dropInteraction: (UIDropInteraction *) interaction canHandleSession: (id) session ;
-(UIDropProposal *) dropInteraction: (UIDropInteraction *) interaction sessionDidUpdate: (id) session ;
-(void) dropInteraction: (UIDropInteraction *) interaction performDrop: (id) session ;
-(void) dropInteraction: (UIDropInteraction *) interaction sessionDidEnter: (id) session ;
-(void) dropInteraction: (UIDropInteraction *) interaction sessionDidExit: (id) session ;
-(void) dropInteraction: (UIDropInteraction *) interaction concludeDrop: (id) session ;
-(void) dropInteraction: (UIDropInteraction *) interaction item: (UIDragItem *) item willAnimateDropWithAnimator: (id) animator ;
-(void) dropInteraction: (UIDropInteraction *) interaction sessionDidEnd: (id) session ;
@end
@protocol UIDropInteractionDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop