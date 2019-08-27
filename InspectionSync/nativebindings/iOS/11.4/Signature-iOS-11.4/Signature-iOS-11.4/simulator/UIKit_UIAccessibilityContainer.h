#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAccessibilityContainer_symbols(JSContext*);
@protocol NSObjectUIAccessibilityContainerCategoryInstanceExports<JSExport>
@property (nonatomic,strong) NSArray * accessibilityElements;
@property (nonatomic) UIAccessibilityContainerType accessibilityContainerType;
-(NSInteger) accessibilityElementCount;
-(id) accessibilityElementAtIndex: (NSInteger) index ;
-(NSInteger) indexOfAccessibilityElement: (id) element ;
@end
@protocol NSObjectUIAccessibilityContainerCategoryClassExports<JSExport>
@end
@protocol UIAccessibilityContainerDataTableInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSArray *) accessibilityHeaderElementsForRow: (NSUInteger) row ;
-(id) accessibilityDataTableCellElementForRow: (NSUInteger) row column: (NSUInteger) column ;
-(NSUInteger) accessibilityColumnCount;
-(NSUInteger) accessibilityRowCount;
-(NSArray *) accessibilityHeaderElementsForColumn: (NSUInteger) column ;
@end
@protocol UIAccessibilityContainerDataTableClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIAccessibilityContainerDataTableCellInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSRange) accessibilityColumnRange;
-(NSRange) accessibilityRowRange;
@end
@protocol UIAccessibilityContainerDataTableCellClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop